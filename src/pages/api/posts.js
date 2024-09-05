// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const data = [
    {
      id: 17850,
      date: "2023-07-31T16:45:00",
      modified: "2024-08-21T18:24:31",
      slug: "pycon-italia-keynote-reflections-on-passion-risk-taking-and-re-invention",
      link: "/blog/pycon-italia-keynote-reflections-on-passion-risk-taking-and-re-invention/",
      title:
        "PyCon Italia Keynote: Reflections on Passion, Risk-Taking, and Re-Invention",
      video_thumbnail: {
        url: "https://yourdomain.com/uploads/2023/07/31/pycon-italia-keynote-thumbnail.jpg",
      },
    },
    {
      id: 17851,
      date: "2023-08-01T10:30:00",
      modified: "2024-08-22T11:15:00",
      slug: "next-js-dynamic-routing-best-practices",
      link: "/blog/next-js-dynamic-routing-best-practices/",
      title: "Next.js Dynamic Routing: Best Practices",
      video_thumbnail: {
        url: "https://yourdomain.com/uploads/2023/08/01/next-js-dynamic-routing-thumbnail.jpg",
      },
    },
  ];

  res.status(200).json(data);
}
