/* eslint-disable react/prop-types */

export default
function Folder ({ name }) {
    return (
      <div className="folder">
        <div className="folder-icon"></div>
        <span className="folder-name">{name}</span>
      </div>
    );
  };