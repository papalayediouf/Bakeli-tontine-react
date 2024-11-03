 import DropdownNav from "../dropdownNav/DropdownNav";

export default function Nav() {
  return (
    <>
      <div className="flex gap-5"  >
        <div  className="">
            🔔
            {/* <img src="" alt="cloche" /> */}
        </div>
        <div className="flex gap-3">
            <div className="">
                👤
                {/* <img src="" alt="admin" /> */}
            </div>
            <div className="">
                <h1 className="font-semibold text-[]">Ndiaga Sall</h1>
                <h1 className="text-xs text-[grey]">Administrator</h1>
            </div>
             <DropdownNav/>
        </div>
      </div>
    </>
  );
}