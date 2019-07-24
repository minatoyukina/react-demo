import React from 'react'
import {VISIBILITY_FILTERS} from "../../redux/constants";
import {connect} from "react-redux";
import {setFilter} from "../../redux/actions";

const Filters = ({setFilter}) => {
    return (
        <div>
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span key={`visibility-filter-${currentFilter}`}
                          onClick={() => setFilter(currentFilter)}>
                        {currentFilter}{' '}
                    </span>
                )
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {activeFilter: state.filterReducer}
};

export default connect(mapStateToProps, {setFilter})(Filters)
