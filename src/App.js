import './App.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Little Lemon - Reserve a table now and enjoy delicious vietnamese meals." />
        <meta name="keywords" content="restaurant, reservation, food, Little Lemon" />
        <meta name="author" content="Paul San Diego" />
        <title>Little Lemon</title>
        <meta property="og:title" content="Little Lemon - Reserve Your Table" />
        <meta property="og:description" content="Book your table at Little Lemon and enjoy a delightful dining experience." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519625149185-7626ff3a86bf?q=80&w=2918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Little Lemon" />
      </Helmet>
      <NavBar/>
      <SectionOne/>
      <Banner/>
      <SectionTwo/>
    </div>
  );
}

export default App;
