import React from 'react';

const FilterForm = (props) => {
        return (
            <div>
                rajaa näytettäviä: <input value={props.filter} onChange={props.handler} />
            </div>
        )
 }

export default FilterForm
