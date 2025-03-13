function showToast(message, duration=4000) {
      // Create a new div element for the toast
      const toast = document.createElement('div');
      toast.textContent = message;
  
      // Add Tailwind CSS classes for styling and animation
      toast.classList.add(
          'fixed',           // Position the toast
          'top-4',           // Place it at the bottom
          'left-1/2',        // Center horizontally
          'transform',       // For centering
          '-translate-x-1/2', // Center horizontally
          'bg-black',        // Background color
          'bg-opacity-80',   // Semi-transparent
          'text-white',      // Text color
          'px-6',            // Horizontal padding
          'py-3',            // Vertical padding
          'rounded-lg',      // Rounded corners
          'shadow-lg',       // Add a shadow
          'z-50',            // Ensure it's on top
          'transition-all',  // Smooth transitions
          'duration-500',    // Transition duration
          'ease-in-out',     // Transition timing function
          'opacity-0',       // Start invisible
          'translate-y-12'    // Start slightly below
      );
  
      // Append the toast to the body
      document.body.appendChild(toast);
  
      // Trigger a reflow to apply the initial styles before animating
      toast.offsetHeight;
  
      // Animate the toast in
      toast.classList.remove('opacity-0', 'translate-y-12');
      toast.classList.add('opacity-100', 'translate-y-0');
  
      // Fade out and remove the toast after the specified duration
      setTimeout(() => {
          toast.classList.remove('opacity-100', 'translate-y-0');
          toast.classList.add('opacity-0', 'translate-y-12');
  
          // Wait for the fade-out animation to complete before removing the toast
          setTimeout(() => {
              toast.remove();
          }, 500); // Match the duration of the fade-out transition
      }, duration);
  }
