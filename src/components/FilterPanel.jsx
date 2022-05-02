import {useSelector, useDispatch} from "react-redux";
import {selectFilters} from "../store/filters/filter-selectors";

import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'
import { Badge } from '../UI/Badge'
import {removeFilter, clearFilter} from "../store/filters/filter-actions";

const FilterPanel = () => {
    const dispatch = useDispatch()
    const currentFilters = useSelector(selectFilters)

    if (currentFilters.length === 0) return null

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {
                        currentFilters.map(i => {
                            return(
                                <Badge
                                    key={i}
                                    variant='clearable'
                                    onClear={() => dispatch(removeFilter(i))}
                                    {...i}
                                >
                                    {i}
                                </Badge>
                            )
                        })
                    }
                </Stack>

                <button
                    className='link'
                    onClick={() => dispatch(clearFilter)}
                >Clear</button>
            </div>
        </Card>
    )
}

export default FilterPanel;