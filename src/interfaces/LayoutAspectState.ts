
export type LayoutAspectStateEnum = "expand" | "collapse";
const layoutAspectStateOrder: LayoutAspectStateEnum[] = ['expand', 'collapse'];

export default interface LayoutAspectState{
    aspectState?: LayoutAspectStateEnum, 
    toggleAspectState? : (newValue?: LayoutAspectStateEnum | undefined) => void
}

export function nextLayoutAspectState(currentState: LayoutAspectStateEnum): LayoutAspectStateEnum {
  const currentIndex = layoutAspectStateOrder.indexOf(currentState);
  const nextIndex = (currentIndex + 1) % layoutAspectStateOrder.length;
  return layoutAspectStateOrder[nextIndex];
}