import { Novu } from "@novu/node"; // importing novu from @novu/node so we have to install @novu/node with npm i @novu/node
const novu = new Novu(process.env.NOVU_API_KEY); // create novu instance with our api key

// handler function
export default async function handler(req, res) {
  const { name, email, title, description } = req.body;
  try {
    if (!name || !email || !title || !description) {
      return res.json({ error: "all fields are requried" });
    }

    // triggering novu to send mail with our payload
    const novuRes = await novu.trigger("task-details", {
      to: {
        subscriberId: name,
        email: email,
      },
      payload: {
        name,
        title,
        description,
      },
    });
    res.status(200).json({
      success: true,
      message: "Task has been assigned successfully",
    });
  } catch (error) {
    console.log(error);
  }
}
