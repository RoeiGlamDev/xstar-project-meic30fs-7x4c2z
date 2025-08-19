import { useEffect, useRef } from 'react';

/
 * Custom hook to manage animations for GlamCS cosmetics website.
 * This hook provides functionalities to animate elements with a luxurious feel,
 * applying 3D effects and transitions that resonate with the high-end cosmetics industry.
 * 
 * @module useAnimation
 */

/
 * Interface for animation options specific to GlamCS.
 */
interface AnimationOptions {
  duration?: number; // Duration of the animation in milliseconds
  delay?: number;    // Delay before the animation starts
  infinite?: boolean; // Whether the animation should loop infinitely
}

/
 * Custom hook for animating elements in GlamCS.
 * 
 * @param {AnimationOptions} options - Options to customize the animation.
 * @returns {React.RefObject<HTMLElement>} - Ref to be attached to a DOM element for animation.
 */
const useAnimation = (options: AnimationOptions = {}): React.RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { duration = 1000, delay = 0, infinite = false } = options;

      // Set initial styles for animation
      ref.current.style.transition = transform ${duration}ms ease-in-out ${delay}ms, opacity ${duration}ms ease-in-out ${delay}ms;
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(20px)';

      // Trigger animation
      requestAnimationFrame(() => {
        ref.current!.style.opacity = '1';
        ref.current!.style.transform = 'translateY(0)';

        // If infinite is true, repeat the animation
        if (infinite) {
          setInterval(() => {
            ref.current!.style.opacity = '0';
            ref.current!.style.transform = 'translateY(20px)';
            requestAnimationFrame(() => {
              ref.current!.style.opacity = '1';
              ref.current!.style.transform = 'translateY(0)';
            });
          }, duration + delay);
        }
      });
    }
  }, [options]);

  return ref;
};

export default useAnimation;