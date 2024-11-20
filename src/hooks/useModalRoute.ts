import { useRouter } from "next/navigation";

const useModalRoute = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return { closeModal };
};

export default useModalRoute;
