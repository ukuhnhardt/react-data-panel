const SecurityMessages = {
  accessPolicies: {
    ACCESS_POLICY: "Access policy",
    ACCESS_POLICY_SELECTIONS: "Access policy selections",
    ADMINISTRATOR_ACCESS: "Administration console access",
    ADMINISTRATOR_ACCESS_DESCRIPTION:
      "Select the access policy to control how users can access the Cloud Identity administration console.",
    END_USER_ACCESS: "Home page access",
    END_USER_ACCESS_DESCRIPTION:
      "Select the access policy to control how users can access their Cloud Identity home page.",
    LOADING_ACCESS_POLICIES: "Loading access policy selections...",
    UPDATED_ACCESS_POLICY: "The access policy is configured.",
    UPDATED_ACCESS_POLICIES: "The access policies are configured.",
    UPDATING_ACCESS_POLICY: "Configuring access policy...",
    UPDATING_ACCESS_POLICIES: "Configuring access policies..."
  },
  applicationConsents: {
    APPLICATION_CONSENT: "Application consent",
    DELETE_CONFORMATION:
      "This action immediately deletes the consents. Are you sure that you want to delete the {{arg[1]}} selected consents.",
    DELETE_MODAL_HEADER: "Delete application consents",
    errorOccurred: {
      RETRIEVE: "Error retrieving application consents",
      RETRIEVE_SUMARRY: "Error retrieving application consents summary",
      DELETE: "Error deleting application consents"
    },
    FILTER_SECTION: {
      clients_subsection_header: "Applications",
      consented_accesses_subsection_header: "Consents",
      consented_by_subsection_header: "Consented by",
      placeholderUser: "Find user name",
      placeholderApplication: "Find application name",
      placeholderAPIAccess: "Find API Access (Entitlements)",
      placeholderScope: "Find scope"
    },
    HEADER: {
      application: "Application",
      apiAccess: "API Access",
      issuedOn: "Issued On",
      lastUpdated: "Last Updated",
      scopes: "Scopes",
      user: "User"
    },
    messagesInfo: {
      MAX_LIMIT_LOADED:
        "The number of items that can be loaded is {{arg[1]}}. Only the first {{arg[2]}} out of the total of {{arg[3]}} items are displayed. If the expected items are not found, specify a search criteria to filter the list."
    },
    SUCCESS: {
      delete: "The selected consents are deleted."
    },
    TITLE: "Open ID Connect Application Consents"
  },
  ITEM_SEPARATER: ", ",
  factors: {
    AUTHENTICATION_FACTORS: "Authentication Factors",
    AUTHN_FACTORS_INSTRUCTIONS:
      "Enable the authentication factors that users can use to sign in to the target applications.",
    email_otp: {
      EMAIL_OTP: "Email One-Time Password"
    },
    sms_otp: {
      SMS_OTP: "SMS One-Time Password"
    },
    totp: {
      TOTP: "Time-Based One-Time Password (For API clients only)",
      ALGORITHM: "Hash Algorithm",
      GEN_INTERVAL: "Generation Interval (seconds)",
      SKEW_INTERVAL: "Skew Intervals",
      ONE_TIME_USE: "One Time Use",
      SECRET_KEY_URL: "Secret Key URL",
      SECRET_KEY_URL_PLACEHOLDER: "URL must start with otpauth://totp/"
    },
    PASSWORD_CHARACTER_SET: "Password Character Set",
    PASSWORD_LENGTH: "Password Length",
    STORE_ENTRY_LIFETIME: "Store Entry Lifetime (seconds)",
    PASSWORD_CHARACTER_SET_PREDEFINED:
      "Select predefined password character sets",
    ERROR_RETRIEVING_FACTORS: "Error retrieving authentication factors",
    ERROR_UPDATING_FACTOR: "Error updating authentication factor: {{arg[1]}}",
    RETRIEVING_FACTORS: "Retrieving authentication factors ...",
    UPDATING_FACTORS: "Updating authentication factor(s) ..."
  },
  verifyAuthentication: {
    ALERT_MESSAGE: "At least one algorithm must be checked",
    FINGERPRINT: "Fingerprint",
    IBM_VERIFY_AUTHENTICATION: "IBM Verify Authentication",
    PREFERRED_ALGORITHM: "Preferred Algorithm",
    SUPPORTED_ALGORITHMS: "Supported Algorithms",
    UPDATING_VERIFY_AUTHENTICATION: "Updating Verify Authentication",
    USER_PRESENCE: "User Presence"
  },
  policyEditor: {
    FORM: {
      conditionLabel: "Condtion values",
      conditionPlaceholder: "Enter condition ...",
      selectPlaceholder: "Choose an option",
      ipOperaions: "IP operations",
      groupOperations: "Group operations",
      submit: "Add",
      typeDesc: {
        groups: "Group or comma separated list of groups",
        IPv4: "IPv4: 1.2.3.4 or 1.2.3.4/8 or 1.2.3.4-1.2.3.42",
        IPv6: "IPv6: equivalent IPv6 representations"
      },
      type: {
        groups: "Group Rule",
        groupIds: "Group Rule",
        IP: "IP Rule",
        geolocation: "Geolocation Rule",
        default: "Default Rule"
      },
      opCode: {
        MATCH: "IP must match",
        NOMATCH: "IP must not match",
        EQ: "Group(s) must exist in subject attributes",
        NEQ: "Group(s) must not exist in subject attributes",
        CONTAINS: "At least one group must exist in subject attributes"
      },
      action: {
        approve: "Approve Access",
        deny: "Deny Access",
        prompt2FA: "Prompt for 2FA"
      }
    },
    HEADER: {
      type: "Rule type",
      condition: "Condition",
      opCode: "Operation",
      action: "Action"
    },
    POLICY: {
      title: "Policies",
      name: {
        label: "Policy name",
        placeholder: "Enter policy name ..."
      },
      desc: {
        label: "Policy description",
        placeholder: "Enter policy description ..."
      },
      add: "Add",
      addPolicy: "Add policy",
      save: "Save",
      delete: "Delete",
      deletePolicy: "Delete policy",
      warning: "Warning",
      deleteModal: "Do you want to permanently delete this policy?",
      rulesOrder:
        "Rules are evaluated in descending order. The first matching rule will be actioned. Default rule is actioned when no other rules match.",
      createAccessPolicy:
        'When this risk policy is saved, a <a href="/developer/explorer/#/Access_Policy_Management">matching access policy</a> is created which can be associated with apps.'
    },
    RULES: {
      title: "Policy rules",
      name: "A {{arg[1]}} rule",
      action: {
        moveUp: "Move rule up",
        moveDown: "Move rule down",
        delete: "Delete rule"
      },
      validationMsgTitle: "Rule error",
      validationMsgDesc: "Default Rule must exist and have lowest priority"
    }
  }
};

export { SecurityMessages };
