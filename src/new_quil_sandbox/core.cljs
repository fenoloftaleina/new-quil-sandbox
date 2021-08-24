(ns new-quil-sandbox.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def size 2000)
(def n 15)
(def s (/ size n))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 60)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)

  ; setup function returns initial state. It contains
  ; circle color and position.

  (q/no-fill)
  (q/stroke 100)
  (q/stroke-weight 1)

  (q/background 20)

  {:fields []
   :frame 0})


(defn update-state [{:keys [fields frame] :as state}]
  {:fields (if (zero? (mod frame 60))
             (mapv (fn [i] (mapv (fn [j]
                                   (int (q/random 2)))
                                 (range n)))
                   (range n))
             fields)
   :a (* 0.5 (+ 1 (q/sin (* frame (/ 0.5 q/PI)))))
   :frame (inc frame)})

(defn draw-state [{:keys [fields frame a] :as state}]
  (q/with-translation
    (mapv #(* (q/random 1) (+ 10 (* frame 0.1)) %) [(q/noise (* frame a)) (q/noise (* frame a))])

    (q/stroke (* (q/noise (* frame a)) 255) 200 100 (* 15 a))

    (doseq [i (range n)]
      (doseq [j (range n)]
        (let [field (get-in fields [i j])]
          ;; (if true
          ;; (if false
          ;; (when (and (< i 1) (< j 1))
          (if (zero? field)
            (do
              ;; (q/line (* i s) (* (+ j 0.5) s) (* (+ i 0.5) s) (* (+ j 1) s))
              ;; (q/line (* (+ i 0.5) s) (* j s) (* (+ i 1) s) (* (+ j 0.5) s))

              (q/arc (* i s) (* (inc j) s) s s (* q/PI (q/lerp 1.5 2.0 (- 1 a))) (* q/PI 2.0))
              (q/arc (* (inc i) s) (* j s) s s (* q/PI (q/lerp 0.5 1.0 a)) (* q/PI 1.0))
              )
            (do
              ;; (q/line (* i s) (* (+ j 0.5) s) (* (+ i 0.5) s) (* j s))
              ;; (q/line (* (+ i 0.5) s) (* (+ j 1) s) (* (+ i 1) s) (* (+ j 0.5) s))

              ;; (q/line (* i s) (* (+ j 0.5) s) (* (+ i 0.5) s) (* j s))
              ;; (q/line (* (+ i 0.5) s) (* (+ j 1) s) (* (+ i 1) s) (* (+ j 0.5) s))

              (q/arc (* i s) (* j s) s s (* q/PI (q/lerp 0.0 0.5 a)) (* q/PI 0.5))
              (q/arc (* (inc i) s) (* (inc j) s) s s (* q/PI (q/lerp 1.0 1.5 (- 1 a))) (* q/PI 1.5))
              )


            ))))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch new-quil-sandbox
    :host "new-quil-sandbox"
    :size [size size]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
(run-sketch)
