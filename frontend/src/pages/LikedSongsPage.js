import React from "react";
import Section from "../components/Section";

function LikedSongsPage() {
  // Static data for liked songs
  const likedSongs = [
    {
      id: 1,
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "/path/to/cover1.jpg",
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      cover: "/path/to/cover2.jpg",
    },
    {
      id: 3,
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "/path/to/cover3.jpg",
    },
    {
      id: 4,
      title: "Peaches",
      artist: "Justin Bieber",
      album: "Justice",
      cover: "/path/to/cover4.jpg",
    },
    {
      id: 5,
      title: "Montero (Call Me By Your Name)",
      artist: "Lil Nas X",
      album: "Montero",
      cover: "/path/to/cover5.jpg",
    },
  ];

  return (
    <div className="overflow-y-auto h-100 p-4">
      <div className="grid gap-y-8">
        <Section
          title="Liked Songs"
          more="/liked"
          items={likedSongs} // Pass static liked songs
          reverse={true}
        />
      </div>
    </div>
  );
}

export default LikedSongsPage;
