import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        const Page = route.component;
                        if (route.Layout) {
                            Layout = route.Layout
                        } 

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />

                        )
                    }
                    )

                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
