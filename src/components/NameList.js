import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "abc",
      age: "34",
      skill: "React",
    },
    {
      id: 2,
      name: "pqr",
      age: "30",
      skill: "Angular",
    },
    {
      id: 3,
      name: "xyz",
      age: "25",
      skill: "Vue",
    },
  ];
  //keys five stable identity
  //helps to identify which items have chnaged ,added, removed.
  //it is special attribute you neeed to include when creating lists of elements
  const PersonList = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));
  return <div>{PersonList}</div>;

  //   const PersonList = persons.map((person) => (
  //     <h2>
  //       I am {person.name}. I am {person.age} years old. I know {person.skill}
  //     </h2>
  //   ));
  //   return <div>{PersonList}</div>;

  //   const names = ["abc", "xyz", "pqr"];
  //   const nameList = names.map((names) => <h2>{names}</h2>);
  //   return (
  //     <div>
  //       {nameList}
  //       {/* {
  //         // map function to iterate over the array and display each name in a list item.

  //         names.map((names) => (
  //           <h2>{names}</h2>
  //         ))
  //       }
  //       {/* <h2>{names[0]}</h2>
  //       <h2>{names[1]}</h2>
  //       <h2>{names[2]}</h2> */}
  //     </div>
  //   );
}

export default NameList;
