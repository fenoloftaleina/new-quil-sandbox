(ns new-quil-sandbox.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)

  (q/background 200)

  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :angle 0})

(defn update-state [state]
  ; Update sketch state by changing circle color and position.
  {:color (mod (+ (:color state) 0.7) 255)
   :x (+ (:x state) 0.1)})

(defn draw-state [state]
  (q/no-fill)
  (q/stroke 0 0 0 2)
  (let [x (:x state)

        move 10
        x1 x
        y1 50
        x2 (+ x move)
        y2 450

        noise-x1 (* (q/noise x1) 50)
        noise-x2 (* (q/noise x2) 50)

        x1 (+ x1 noise-x1)

        x2 (+ x2 noise-x2)

        noise-x12 (* (q/noise x1) 50)
        noise-x22 (* (q/noise x2) 50)


        y1 (+ y1 noise-x12)

        y2 (+ y2 noise-x22)

        c1x (+ x1 1000 noise-x1)
        c1y (+ y1 1000 noise-x2)
        c2x (- x2 100 noise-x12)
        c2y (- y2 100 noise-x22)
        ]

    ;; (q/with-translation [0
    ;;                      (/ (q/height) 2)]

      ;; (q/line x1 y1 x2 y2)

      (q/bezier x1 y1 0
                c1x c1y 0
                c2x c2y 0
                x2 y2 0)

      ;; )
  ))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch new-quil-sandbox
    :host "new-quil-sandbox"
    :size [500 500]
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
