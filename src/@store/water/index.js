import Immutable, { List, Map } from "immutable";

export default Immutable.fromJS({
  totalContent: {
    table: {
      one: [
        {
          label: "Title1",
          color: "active",
          value: [1, 2, 444, 222, 111]
        },
        {
          label: "Title2",
          color: "success",
          value: [32, 22, 113, 34, 2]
        }
      ],
      two: [
        {
          label: "Title1",
          color: "active",
          value: [1, 2, 444, 222, 111]
        },
        {
          label: "Title2",
          color: "success",
          value: [32, 22, 113, 34, 2]
        }
      ],
      three: [
        {
          label: "Title1",
          color: "active",
          value: [1, 2, 444, 222, 111]
        },
        {
          label: "Title2",
          color: "success",
          value: [32, 22, 113, 34, 2]
        }
      ],
      four: [
        {
          label: "Title1",
          color: "active",
          value: [1, 2, 444, 222, 111]
        },
        {
          label: "Title2",
          color: "success",
          value: [32, 22, 113, 34, 2]
        }
      ]
    },
    requestInfo: {
      time: new Date(),
      handle: {
        time: Date.now
      }
    }
  }
});
