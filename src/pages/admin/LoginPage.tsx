import LoginForm from "../../components/dashboard/login/LoginForm";
//import AuthHeader from "../../components/layout/AuthHeader";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#0b1220] flex flex-col">
      {/* <AuthHeader /> */}

      <main className="flex-1 flex items-center justify-center px-4">
        <LoginForm />
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        <div className="flex justify-center gap-6">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
