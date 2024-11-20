import { NavigationLeft } from "@/components";
import { container } from "./mypage.css";

const MypageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className={container}>
      <NavigationLeft />
      {children}
    </main>
  );
};

export default MypageLayout;
