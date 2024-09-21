import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import Listing from "../pages/listing/Listing";
import AddListing from "../pages/addListing/AddListing";

const routes = [
  {
    path: appRoutes.home,
    Component: Home,
  },
  {
    path: appRoutes.listing,
    Component: Listing,
  },
  {
    path: appRoutes.addListing,
    Component: AddListing,
  },
];

export default routes;
