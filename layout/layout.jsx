import FooterComponent from "@/component/footer/footer";
import HeaderComponent from "@/component/header/header";
import Pagination from "@/component/Pagination/Pagination";
// import "@/styles/index.scss";
import DataProvider from "@/context/DataProvider";

export const metadata = {
  title: "The Daily Uz",
  description: "Online gazeta",
};

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <HeaderComponent />
      <Pagination />
      {children}
      <FooterComponent />
    </DataProvider>
  );
}
