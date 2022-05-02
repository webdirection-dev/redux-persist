import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {addPositions} from "./store/positions/position-actions";
import data from './mock/data.json'

import TheHeader from "./components/TheHeader";
import FilterPanel from "./components/FilterPanel";
import JobList from "./components/JobList";

function App() {
    const dispatch = useDispatch()

    useMemo(() => {
        dispatch(addPositions(data))
    }, [dispatch])

    return (
        <>
            <TheHeader />

            <div className="container">
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
