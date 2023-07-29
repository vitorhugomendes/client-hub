import { LoginForm } from '../../components';

export const Home = () => {
  return (
    <main>
      <div>
        <div>
          <div className="wheel"></div>
          <div className="text-content">
            <div className="logo"></div>
            <div className="text">
              <h1>title</h1>
              <h2>description</h2>
            </div>
            <div className="buttons">
              <button>register</button>
              <button>login</button>
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
