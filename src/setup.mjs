// Create a MutationObserver to monitor the DOM for changes
const observer = new MutationObserver((mutationsList, observer) => {
    // Loop through all mutations
    for (const mutation of mutationsList) {
      // If new nodes are added (tooltip elements might be added)
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          // Check if the added node is a tooltip
          if (node.matches && node.matches('[data-tippy-root]')) {
            // Select and remove the h5 parent of the "FUTURE_IS_NOW_OLD_MAN" lang-id
            const futureNow = node.querySelector('[lang-id="FUTURE_IS_NOW_OLD_MAN"]');
            if (futureNow) {
              futureNow.closest('h5').remove();
            }
  
            // Select and remove the h5 parent of the "MENU_TEXT_TOOLTIP_FUTURE_UPDATE" lang-id
            const futureUpdate = node.querySelector('[lang-id="MENU_TEXT_TOOLTIP_FUTURE_UPDATE"]');
            if (futureUpdate) {
              futureUpdate.closest('h5').remove();
            }
          }
        });
      }
    }
  });
  
  // Start observing changes in the document body
  observer.observe(document.body, {
    childList: true, // Watch for added or removed nodes
    subtree: true,   // Observe the entire document, including all descendants
  });
  