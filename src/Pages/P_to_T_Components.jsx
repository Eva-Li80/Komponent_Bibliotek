import React from "react";
import ToolTip from "../Components/P-T Components/ToolTip";
import Card from "../Components/A-E Components/Card";
import "../Pages/container.css";
import Toggle from "../Components/P-T Components/Toggle";
import Toast from "../Components/P-T Components/Toast";
import Tagbar from "../Components/P-T Components/Tagbar";
import Stepper from "../Components/P-T Components/Stepper";
import StatusIcon from "../Components/P-T Components/StatusIcon";
import Slider from "../Components/P-T Components/Slider";
import Scrollbox from "../Components/P-T Components/Scrollbox";
import Skeleton from "../Components/P-T Components/Skeleton";
import Searchfield from "../Components/P-T Components/Searchfield";
import { useState } from "react";

const P_to_T_Components = () => {
  //tabBar
  const tabs = [
    { title: "Tab 1", content: "Content of Tab 1" },
    { title: "Tab 2", content: "Content of Tab 2" },
    { title: "Tab 3", content: "Content of Tab 3" },
  ];

  //searchfield
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Simulera en sökning genom att filtrera data baserat på söktermen
    const filteredResults = tabs.filter((tab) =>
      tab.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container">
      <Card title="Scrollbox">
        <Scrollbox height="200px">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            sodales convallis neque eget cursus. Mauris ac justo aliquam, dictum
            libero et, aliquam dui. Donec eu sapien auctor, finibus odio eget,
            facilisis nisi. Proin vel sapien ligula. Duis posuere elit et ligula
            commodo, nec tincidunt nisl varius. Nulla in eros fringilla, dictum
            enim a, placerat justo. In vel augue ut magna congue consequat non
            vel orci. In hac habitasse platea dictumst. Suspendisse potenti.
          </p>
          <p>
            Nulla porttitor tincidunt odio, at feugiat felis. Morbi pulvinar
            viverra vehicula. Sed dignissim urna sit amet odio finibus
            venenatis. Ut interdum ipsum ut nulla aliquam, in placerat urna
            tincidunt. Fusce non mi vitae purus dapibus fringilla. Duis
            eleifend, purus sed fermentum placerat, enim neque consectetur ex,
            ut fermentum ipsum lectus eget ligula. Maecenas luctus enim ut magna
            fringilla, sed volutpat urna venenatis.
          </p>
          <p>
            Etiam ut lectus lectus. Nam a elit bibendum, tincidunt leo ut,
            ultricies turpis. Aliquam ac elit tincidunt, pulvinar justo ut,
            posuere justo. Integer non tristique ligula. Donec bibendum magna
            nec magna hendrerit, non dictum elit vestibulum. Morbi non ex et
            arcu ullamcorper rutrum.
          </p>
        </Scrollbox>
      </Card>
      <Card title="Searchfield">
        {searchResults.map((result, index) => (
          <div key={index}>{result.title}</div>
        ))}
        <Searchfield onSearch={handleSearch} />
      </Card>

      <Card title="Skeleton">
        <Skeleton />
      </Card>
      <Card title="Slider">
        <Slider />
      </Card>
      <Card title="Spinner"></Card>
      <Card title="StatusIcon">
        <StatusIcon status="active" />
        <StatusIcon status="inactive" />
      </Card>
      <Card title="Stepper">
        <Stepper startValue={0} stepValue={1} />
      </Card>

      <Card title="Tagbar">
        <Tagbar tabs={tabs} />
      </Card>
      <Card title="Toast">
        <Toast message="this is a toast" />
      </Card>
      <Card title="Toggle">
        <Toggle messageone="Hejsan" messagetwo="Hej då" />
      </Card>
      <Card title="Tooltip">
        <ToolTip text="Detta är tooltip text" btntext="Hover over me" />
      </Card>
    </div>
  );
};

export default P_to_T_Components;
