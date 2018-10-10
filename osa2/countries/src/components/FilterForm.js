import React from 'react';

const FilterForm = (props) => {
        return (
            <div>
                find countries: <input value={props.filter} onChange={props.handler} />
            </div>
        )
 }

export default FilterForm
