export const WINDOW_RESIZE = "WINDOW_RESIZE";

export const setWindowSize = (isMobile) => ({
  type: WINDOW_RESIZE,
  payload: isMobile,
});
