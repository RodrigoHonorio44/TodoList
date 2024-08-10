import React from 'react'

const FIlter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filter:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="ALL">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>

                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button onClick={() => setSort("ASC")}>ASC</button>
                    <button onClick={() => setSort("DESC")}>DESC</button>
                </div>
            </div>
        </div>
    )
}

export default FIlter