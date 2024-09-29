export const observeURLChange = (changeEvent: (href: string) => any) => {
  let currentHref = document.location.href;
  const body = document.querySelector("body");
  const observer = new MutationObserver((mutations) => {
    if (currentHref !== document.location.href) {
      currentHref = document.location.href;
      changeEvent(document.location.href);
    }
  });

  observer.observe(body, { childList: true, subtree: true });
};
