import { useState } from "react";

const SearchCriteria = () => {
  const [criteria, setCriteria] = useState([]);
  const [newCriterion, setNewCriterion] = useState("");

  const addCriteria = () => {
    if (newCriterion.trim()) {
      setCriteria([...criteria, newCriterion.trim()]);
      setNewCriterion("");
    }
  };

  const removeCriterion = (index) => {
    setCriteria(criteria.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCriteria();
    }
  };

  return (
    <div>
      <div className="d-flex flex-wrap gap-0 mb-2">
        {criteria.map((criterion, index) => (
          <span key={index} className="tag-badge btn-secondary">
            {criterion}
            <button onClick={() => removeCriterion(index)} className="close-btn" aria-label="Eliminar criterio">
              &times;
            </button>
          </span>
        ))}
      </div>
      <div className="input-group">
        <input
          type="text"
          value={newCriterion}
          onChange={(e) => setNewCriterion(e.target.value)}
          onKeyUp={handleKeyPress}
          className="form-control"
          placeholder="Agregar nuevo criterio"
        />
        <button onClick={addCriteria} className="btn btn-primary">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default SearchCriteria;
