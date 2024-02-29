export default function getMockState() {
  return {
    invoiceSlice: {
      selectedInvoice: {
        id: "RT3080",
        createdAt: "2021-08-18",
        paymentDue: "2021-08-19",
        description: "Re-branding",
        paymentTerms: 1,
        clientName: "Jensen Huang",
        clientEmail: "jensenh@mail.com",
        status: "paid",
        senderAddress: {
          street: "19 Union Terrace",
          city: "London",
          postCode: "E1 3EZ",
          country: "United Kingdom",
        },
        clientAddress: {
          street: "106 Kendell Street",
          city: "Sharrington",
          postCode: "NR24 5WQ",
          country: "United Kingdom",
        },
        items: [
          {
            name: "Brand Guidelines",
            quantity: 1,
            price: 1800.9,
            total: 1800.9,
          },
          {
            name: "Boat",
            quantity: 2,
            price: 1532.33,
            total: 3064.66,
          },
        ],
        total: 1800.9,
      },
      invoices: [
        {
          id: "AA1449",
          createdAt: "2021-10-7",
          paymentDue: "2021-10-14",
          description: "Re-branding",
          paymentTerms: 7,
          clientName: "Mellisa Clarke",
          clientEmail: "mellisa.clarke@example.com",
          status: "pending",
          senderAddress: {
            street: "19 Union Terrace",
            city: "London",
            postCode: "E1 3EZ",
            country: "United Kingdom",
          },
          clientAddress: {
            street: "46 Abbey Row",
            city: "Cambridge",
            postCode: "CB5 6EG",
            country: "United Kingdom",
          },
          items: [
            {
              name: "New Logo",
              quantity: 1,
              price: 1532.33,
              total: 1532.33,
            },
            {
              name: "Brand Guidelines",
              quantity: 1,
              price: 2500.0,
              total: 2500.0,
            },
          ],
          total: 4032.33,
        },
        {
          id: "TY9141",
          createdAt: "2021-10-01",
          paymentDue: "2021-10-31",
          description: "Landing Page Design",
          paymentTerms: 30,
          clientName: "Thomas Wayne",
          clientEmail: "thomas@dc.com",
          status: "pending",
          senderAddress: {
            street: "19 Union Terrace",
            city: "London",
            postCode: "E1 3EZ",
            country: "United Kingdom",
          },
          clientAddress: {
            street: "3964  Queens Lane",
            city: "Gotham",
            postCode: "60457",
            country: "United States of America",
          },
          items: [
            {
              name: "Web Design",
              quantity: 1,
              price: 6155.91,
              total: 6155.91,
            },
          ],
          total: 6155.91,
        },
        {
          id: "FV2353",
          createdAt: "2021-11-05",
          paymentDue: "2021-11-12",
          description: "Logo Re-design",
          paymentTerms: 7,
          clientName: "Anita Wainwright",
          clientEmail: "",
          status: "draft",
          senderAddress: {
            street: "19 Union Terrace",
            city: "London",
            postCode: "E1 3EZ",
            country: "United Kingdom",
          },
          clientAddress: {
            street: "",
            city: "",
            postCode: "",
            country: "",
          },
          items: [
            {
              name: "Logo Re-design",
              quantity: 1,
              price: 3102.04,
              total: 3102.04,
            },
          ],
          total: 3102.04,
        },
      ],
    },
    itemsSlice: [
      {
        name: "Car",
        quantity: 1,
        price: 6155.91,
        total: 6155.91,
      },
      {
        name: "Bike",
        quantity: 1,
        price: 1532.33,
        total: 1532.33,
      },
      {
        name: "Boat",
        quantity: 2,
        price: 1532.33,
        total: 3064.66,
      },
    ],
  };
}
