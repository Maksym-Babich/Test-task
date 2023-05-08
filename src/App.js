import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'components/HomePage/HomePage';
import { TwitsPage } from 'components/TwitsPage/TwitsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="twits" element={<TwitsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
