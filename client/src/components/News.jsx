import React, { useEffect, useState } from "react";

const News = () => {
  const selected_district = localStorage.getItem('selectedDistrict');
  const susFactor = localStorage.getItem("sustainable_factor");
  const [value, setValue] = useState("");
  const [variables, setVariables] = useState({
    Factor: "",
    District: ""
  });

  useEffect(() => {
    setVariables({
      Factor: susFactor,
      District: selected_district
    });
  }, []);

  useEffect(() => {
    if (variables.Factor && variables.District) {
      setValue(`${variables.Factor} in ${variables.District}`);
    } else {
      setValue("");
    }
  }, [variables]);

  useEffect(() => {
    (function () {
      const cx = "9283da9674a594ca8"; // Your Search Engine ID
      const gcse = document.createElement("script");
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = `https://cse.google.com/cse.js?cx=${cx}`;
      const s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    })();

    window.__gcse = {
      parsetags: "explicit",
      callback: () => {
        // This callback is called when the Google CSE script is loaded
        renderSearchForms();
      },
    };
  }, []);

  const renderSearchForms = () => {
    if (window.google && window.google.search) {
      window.google.search.cse.element.render({
        div: "googlesearch",
        tag: "search",
        gname: "gsearch",
      });
    } else {
      console.error("Google search object is not available.");
    }
  };

  useEffect(() => {
    const input = document.getElementById("search");
    const submit = (e) => {
      if (e.keyCode === 13) {
        executeSearch();
      }
    };
    input.addEventListener("keyup", submit);

    return () => input.removeEventListener("keyup", submit);
  }, [value]);

  const executeSearch = () => {
    if (window.google && window.google.search) {
      const element = window.google.search.cse.element.getElement("gsearch");
      if (element) {
        element.execute(value);
      } else {
        console.error("Search element not found.");
      }
    } else {
      console.error("Google search object is not available.");
    }
  };

  useEffect(() => {
    if (value.length > 0) {
      executeSearch();
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      executeSearch();
    }
  };

  return (
    <div id="search-container" className="flex flex-col items-center p-4 overflow-y-auto">
      <input
        name="search"
        id="search"
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 mb-2 w-full max-w-md"
        placeholder="Search..."
        style={{ display: 'none' }} // Hide the search box
      />
      <button
        id="submit"
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
        style={{ display: 'none' }} // Hide the button as well
      >
        Search
      </button>
      <div id="googlesearch" className="mt-4 w-full max-w-md"></div>
    </div>
  );
};

export default News;