import { setWindowSize } from "../store/ui/actions";

export function windowResize(dispatch, isMobile) {
  dispatch(setWindowSize(isMobile));
}
