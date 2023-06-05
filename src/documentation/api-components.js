const components = {
  components: {
    schemas: {
      RegistrationRequest: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
          name: {
            type: "string",
            description: "User's name",
            example: "testUser",
          },
          email: {
            type: "string",
            description: "User's email",
            format: "email",
          },
          password: {
            type: "string",
            description: "User's password",
            example: "qwerty123",
          },
        },
      },
      RegistrationResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            token: {
              type: "string",
              description: "Bearer token",
              example: "string",
            },
            user: {
              name: {
                type: "string",
                description: "User's name",
                example: "testUser",
              },

              email: {
                type: "string",
                description: "User's email",
                format: "email",
              },
              userId: {
                type: "string",
                description: "User's id",
                example: "32143232436545474",
              },
            },
          },
        },
        example: [
          {
            token: "string",
            user: {
              name: "testUser",
              email: "user@example.com",
              userId: "32143232436545474",
            },
          },
        ],
      },
      LoginRequest: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
            description: "User's email",
            format: "email",
          },
          password: {
            type: "string",
            description: "User's password",
            example: "qwerty123",
          },
        },
      },
      LoginResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            token: {
              type: "string",
              description: "Bearer token",
              example: "string",
            },
            user: {
              name: {
                type: "string",
                description: "User's name",
                example: "testUser",
              },

              email: {
                type: "string",
                description: "User's email",
                format: "email",
              },
              userId: {
                type: "string",
                description: "User's id",
                example: "32143232436545474",
              },
            },
          },
        },
        example: [
          {
            token: "string",
            user: {
              name: "testUser",
              email: "user@example.com",
              userId: "32143232436545474",
            },
          },
        ],
      },
      CurrentResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            token: {
              type: "string",
              description: "Bearer token",
              example: "string",
            },
            user: {
              name: {
                type: "string",
                description: "User's name",
                example: "testUser",
              },

              email: {
                type: "string",
                description: "User's email",
                format: "email",
              },
              userId: {
                type: "string",
                description: "User's id",
                example: "32143232436545474",
              },
            },
          },
        },
        example: [
          {
            token: "string",
            user: {
              name: "testUser",
              email: "user@example.com",
              userId: "32143232436545474",
            },
          },
        ],
      },
      UpdateUserDataRequest: {
        type: "object",
        properties: {
          avatar: {
            type: "string",
            description: "uplodaded image ( png, jpg, jpeg )",
            format: "binary",
          },
          name: {
            type: "string",
            description: "Updated user's name",
            example: "testUserUPD",
          },
        },
      },
      UpdateUserDataResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            token: {
              type: "string",
              description: "Bearer token",
              example: "string",
            },
            user: {
              name: {
                type: "string",
                description: "User's name",
                example: "testUser",
              },

              email: {
                type: "string",
                description: "User's email",
                format: "email",
              },
              userId: {
                type: "string",
                description: "User's id",
                example: "32143232436545474",
              },
            },
          },
        },
        example: [
          {
            token: "string",
            user: {
              name: "testUser",
              email: "user@example.com",
              userId: "32143232436545474",
            },
          },
        ],
      },
      SubscribeRequest: {
        type: "object",
        required: ["email"],
        properties: {
          email: {
            type: "string",
            description: "User's email",
            format: "email",
          },
        },
      },
      CategoryListResponse: {
        type: "array",
        items: {
          type: "object",
          properties: {
            category: {
              type: "string",
              description: "Category name",
              example: "Beef",
            },
            _id: {
              type: "string",
              description: "User's id",
              example: "6478d1857194b94d73dc99ac",
            },
          },
        },
        example: [
          {
            category: "Beef",
            _id: "6478d1857194b94d73dc99ac",
          },
        ],
      },
    },
    AddOwnRecipeRequest: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "title of recipe",
          example: "Pizza",
        },
        description: {
          type: "string",
          description: "Brief description of dish",
          example: "Italian cuisine",
        },
        category: {
          type: "string",
          description: `One of this: " "Beef","Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian" "`,
          example: "Miscellaneous",
        },
        time: {
          type: "number",
          description: "time of cooking",
          example: "30",
        },
      },
    },
    AddOwnRecipeResponse: {
      type: "array",
      items: {
        type: "object",
        properties: {
          token: {
            type: "string",
            description: "Bearer token",
            example: "string",
          },
          user: {
            name: {
              type: "string",
              description: "User's name",
              example: "testUser",
            },

            email: {
              type: "string",
              description: "User's email",
              format: "email",
            },
            userId: {
              type: "string",
              description: "User's id",
              example: "32143232436545474",
            },
          },
        },
      },
      example: [
        {
          token: "string",
          user: {
            name: "testUser",
            email: "user@example.com",
            userId: "32143232436545474",
          },
        },
      ],
    },
    securitySchemes: {
      Bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

module.exports = components;
