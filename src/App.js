import './App.css';
import Header from './components/common/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about';
import CourseHome from './components/allCourses/courseHome';
import Team from './components/team/team';
import Price from './components/price/price';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/about" component={About} />
        <Route path = "/courses" component={CourseHome} />
        <Route path = "/team" component={Team} />
        <Route path = "/pricing" component={Price} />
        <Route path = "/journal" component={Blog} />
        <Route path = "/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
