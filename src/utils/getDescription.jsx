const getRandomEntry = (array) =>
  array[Math.floor(Math.random() * array.length)];

export default function getDescription(character) {
  const { name, location, origin, status } = character;
  const descriptionList = [
    <p>{`${name} comes from ${origin.name} and was last seen at ${location.name}.`}</p>,
    <p>
      {`The feared ${name} hails from ${origin.name}.`}
      <br />
      {`Be careful when you visit ${location.name}...`}
    </p>,
    <p>
      {`It is said that ${character.name} currently lurks around ${location.name}.`}
      <br />
      {"Witness reports however have yet to be confirmed."}
    </p>,
    <p>
      {`If you ever stop by ${location.name} be sure to say hi to ${name}!.`}
    </p>,
    <p>
      {`Hi! I'm ${name}.`} <br />{" "}
      {`I've managed to come all the way from ${location.name} to this react app`}
    </p>,
    <p>{`What are you looking at anon?. You would be dead if I weren't on ${location.name}.`}</p>,
    <p>{`The weather is amazing at ${location.name} ... though I do miss ${
      origin.name !== "unknown" ? origin.name : "my hometown"
    }.`}</p>,
    <p>{`Who are you? Doesn't matter, I'm ${name}. Can you get me out of ${location.name}`}</p>,
  ];
  const deadList = [
    <p>{`Unfortunately, ${name} is no longer with us. He enjoyed his time at ${location.name}`}</p>,
    <p>{`${name} perished in gruesome battle in ${location.name}`}</p>,
    <p>{`${
      origin.name !== "unknown" ? origin.name : "The Universe"
    } mourns the passing of ${name}, one of it's esteemed residents.`}</p>,
    <p>{`While a prominent figure from ${location.name}, ${name} is currently K.I.A.`}</p>,
  ];
  const unknownDescriptionList = [
    <p>{`It is not known where ${name} comes from.`}</p>,
    <p>
      {`Fugitive Prisoner: ${name}.`} <br />
      {`Location: UNKNOWN.`} <br />
    </p>,
  ];
  if (location.name === "unknown") {
    return getRandomEntry(unknownDescriptionList);
  }
  if (status === "Dead") {
    return getRandomEntry(deadList);
  }
  return getRandomEntry(descriptionList);
}
