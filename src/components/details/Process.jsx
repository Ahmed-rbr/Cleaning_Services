const Process = ({ service }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="txt text-2xl font-medium ">Cleaning Process</h1>
      <ul className="flex flex-col gap-3">
        {service.process.map((ser, id) => (
          <li
            className="text-black/90 flex gap-3 items-center dark:text-gray-200 font-normal"
            key={id}
          >
            <span className="rounded-full p-1 text-black font-medium  dark:text-gray-400 text-xs px-2 bg-bgAccent">
              {id + 1}
            </span>{" "}
            {ser}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Process;
