import ImmutablePage from "@page/ImmutableTable/index.js";
import EntryPage from "@page/entry/index.js";
import RootPage from "@page/root.js";
import SagaSnackPage from "@page/SagaSnackUse/index.js";

export default {
  path: "/",
  component: RootPage,
  indexRoute: {
    component: EntryPage
  },
  childRoutes: [
    {
      path: "entry",
      component: EntryPage
    },
    {
      path: "immutable",
      component: ImmutablePage
    },
    {
      path: "snack",
      component: SagaSnackPage
    }
  ]
};
