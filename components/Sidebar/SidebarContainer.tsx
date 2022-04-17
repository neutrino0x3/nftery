import SidebarView from "./SidebarView";
import { useRouter } from "next/router";

export const SidebarContainer = () => {
  const router = useRouter();
  const onClickHandler = (item: string) => {
    switch (item) {
      case "home":
        router.push("/home");
        break;
      case "mint":
        router.push("/mint");
        break;
      default:
        break;
    }
  };
  return <SidebarView onClickHandler={onClickHandler} />;
};
