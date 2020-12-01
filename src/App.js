import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListProjects from './components/ListProjects'
import AddProject from './components/AddProject';
import ProjectDetail from './components/ProjectDetail';
import Navbar from './components/Navbar';
import EditProject from './components/EditProject';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListProjects} />
        <Route exact path="/projects" component={ListProjects} />
        <Route exact path="/projects/add" component={AddProject} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route exact path="/projects/:id/edit" component={EditProject} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
