

const DownMenu = ({ options, onSelect }) => {

    return (
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index} onClick={() => onSelect(option)}>
            {option}
          </li>
        ))}
      </ul>
    );
  };


export default DownMenu;
