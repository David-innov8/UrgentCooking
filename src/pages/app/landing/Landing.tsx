import { useState } from "react";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { PropertyGrid } from "../../../components/PropertyGrid/PropertyGrid";
import { Header } from "../../../components/Header/Header";
import { CreateRoom } from "../../../services/mutation";
import { GetRooms } from "../../../services/query";
import { HousePlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog";
import { toast } from "react-toastify";

export const Landing = () => {
  const [info, setInfo] = useState<any>({
    room_header: "",
    amount_per_day: "",
    availability: false,
    room_is_flagged: false,
    about_the_space: "",
    main_image: "",
    main_image_url: "",
  });

  const { data, isLoading, error } = GetRooms();

  const { mutate, isPending } = CreateRoom();

  const handleCreateRoom = () => {
    if(!info.room_header || !info.amount_per_day || !info.about_the_space || !info.main_image) {
      toast.error("Please fill all the fields");
      return;
    }

    const payload = {
      room_header: "Room name",
      amount_per_day: "Room price",
      availability: true,
      room_is_flagged: true,
      about_the_space: "Room type",
      main_image: "Room image",
      main_image_url: "Room image url",
    };

    // @ts-ignore
    mutate(payload, {
      onSuccess: () => {
        console.log("Room created successfully");
        toast.success("Room created successfully");
      },
      onError: (error) => {
        console.error("Error creating room:", error);
        toast.error("Error creating room");
      },
    });
  };
  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">
        Error loading properties
      </div>
    );

  return (
    <main className="">
      <Header />
      <SearchBar />
      <div className="flex justify-end px-10">
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-gray-600 hover:text-gray-900 text-[10px] text-[#222222]">
            <HousePlusIcon />
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Create Room</DialogTitle>
            <DialogDescription>
              <form className="mt-5">
                <input
                  type="text"
                  placeholder="Room name"
                  value={info.room_header}
                  onChange={(e) => setInfo({ ...info, room_header: e.target.value })} 
                  className="w-full outline-none text-xs bg-gray-100 px-2 py-3 mb-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Room description"
                  value={info.about_the_space}
                  onChange={(e) => setInfo({ ...info, about_the_space: e.target.value })}
                  className="w-full outline-none text-xs bg-gray-100 px-2 py-3 mb-3 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Room price"
                  value={info.amount_per_day}
                  onChange={(e) => setInfo({ ...info, amount_per_day: e.target.value })}
                  className="w-full outline-none text-xs bg-gray-100 px-2 py-3 mb-3 rounded-md"
                />
                <input
                  type="file"
                  placeholder="Room image"
                  onChange={(e) => setInfo({ ...info, main_image: e.target.files![0] })}
                  className="w-full outline-none text-xs bg-gray-100 px-2 py-3 mb-3 rounded-md"
                />
                <button
                  type="button"
                  onClick={handleCreateRoom}
                  className="bg-[#222222] text-white px-4 py-2 rounded-[5px] mx-auto block hover:bg-[#333333] transition duration-300 mt-5 w-full"
                >
                  {isPending ? "Creating..." : "Create Room"}
                </button>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
      <div className="mt-8">
        <PropertyGrid properties={data || []} />
      </div>
    </main>
  );
};
