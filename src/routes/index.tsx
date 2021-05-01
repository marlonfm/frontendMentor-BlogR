import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Page = lazy(() => import('src/pages/Page'));
const GenericNotFound = lazy(() => import('src/pages/GenericNotFound'));

const Routes: React.FC = () => {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Switch>
        <Route exact path="/" component={Page} />

        <Route path="/404" component={GenericNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
