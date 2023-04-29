"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[8155],{

/***/ 53752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useReviewWorkflows)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88767);
/* harmony import */ var _strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81849);


const QUERY_BASE_KEY = "review-workflows";
const API_BASE_URL = "/admin/review-workflows";
function useReviewWorkflows(workflowId) {
  const { get } = (0,_strapi_helper_plugin__WEBPACK_IMPORTED_MODULE_0__/* .useFetchClient */ .kY)();
  const client = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  const workflowQueryKey = [QUERY_BASE_KEY, workflowId ?? "default"];
  async function fetchWorkflows({ params = { populate: "stages" } }) {
    try {
      const {
        data: { data }
      } = await get(`${API_BASE_URL}/workflows/${workflowId ?? ""}`, { params });
      return data;
    } catch (err) {
      return null;
    }
  }
  async function refetchWorkflow() {
    await client.refetchQueries(workflowQueryKey);
  }
  const workflows = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(workflowQueryKey, fetchWorkflows);
  return {
    workflows,
    refetchWorkflow
  };
}


/***/ }),

/***/ 10307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ReviewWorkflows)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(41054);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 21 modules
var es = __webpack_require__(86706);
// EXTERNAL MODULE: ./node_modules/react-query/es/index.js
var react_query_es = __webpack_require__(88767);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 18 modules
var helper_plugin_esm = __webpack_require__(81849);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Loader/Loader.js + 1 modules
var Loader = __webpack_require__(88655);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/constants.js
const REDUX_NAMESPACE = "settings_review-workflows";
const ACTION_SET_WORKFLOWS = `Settings/Review_Workflows/SET_WORKFLOWS`;
const ACTION_DELETE_STAGE = `Settings/Review_Workflows/WORKFLOW_DELETE_STAGE`;
const ACTION_ADD_STAGE = `Settings/Review_Workflows/WORKFLOW_ADD_STAGE`;
const ACTION_UPDATE_STAGE = `Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE`;

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/actions/index.js

function setWorkflows({ status, data }) {
  return {
    type: ACTION_SET_WORKFLOWS,
    payload: {
      status,
      workflows: data
    }
  };
}
function deleteStage(stageId) {
  return {
    type: ACTION_DELETE_STAGE,
    payload: {
      stageId
    }
  };
}
function addStage(stage = {}) {
  return {
    type: ACTION_ADD_STAGE,
    payload: stage
  };
}
function updateStage(stageId, payload) {
  return {
    type: ACTION_UPDATE_STAGE,
    payload: {
      stageId,
      ...payload
    }
  };
}

// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/PlusCircle.js
var PlusCircle = __webpack_require__(99782);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/AddStage.js





const StyledAddIcon = (0,styled_components_browser_esm/* default */.ZP)(PlusCircle/* default */.Z)`
  > circle {
    fill: ${({ theme }) => theme.colors.neutral150};
  }
  > path {
    fill: ${({ theme }) => theme.colors.neutral600};
  }
`;
const StyledButton = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  border-radius: 26px;

  svg {
    height: ${({ theme }) => theme.spaces[6]};
    width: ${({ theme }) => theme.spaces[6]};

    > path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary600} !important;
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600} !important;
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }

  &:active {
    ${Typography/* Typography */.Z} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${StyledAddIcon} {
      > circle {
        fill: ${({ theme }) => theme.colors.primary600};
      }
      > path {
        fill: ${({ theme }) => theme.colors.neutral100};
      }
    }
  }
`;
function AddStage({ children, ...props }) {
  return /* @__PURE__ */ react.createElement(
    StyledButton,
    {
      as: "button",
      background: "neutral0",
      border: "neutral150",
      paddingBottom: 3,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 3,
      shadow: "filterShadow",
      ...props
    },
    /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { gap: 2 }, /* @__PURE__ */ react.createElement(StyledAddIcon, { "aria-hidden": true }), /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "pi", fontWeight: "bold", textColor: "neutral500" }, children))
  );
}
AddStage.propTypes = {
  children: (prop_types_default()).node.isRequired
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/AddStage/index.js


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js + 1 modules
var AccordionToggle = __webpack_require__(74756);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/IconButton/IconButton.js
var IconButton = __webpack_require__(12028);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContent.js
var AccordionContent = __webpack_require__(63081);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(74571);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextInput/TextInput.js
var TextInput = __webpack_require__(16364);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Trash.js
var Trash = __webpack_require__(20022);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/Stage.js









function Stage({ id, name, index, canDelete, isOpen: isOpenDefault = false }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  const [isOpen, setIsOpen] = (0,react.useState)(isOpenDefault);
  const fieldIdentifier = `stages.${index}.name`;
  const [field, meta] = (0,formik_esm/* useField */.U$)(fieldIdentifier);
  const dispatch = (0,es/* useDispatch */.I0)();
  return /* @__PURE__ */ react.createElement(
    Accordion/* Accordion */.U,
    {
      size: "S",
      variant: "primary",
      onToggle: () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
          trackUsage("willEditStage");
        }
      },
      expanded: isOpen,
      shadow: "tableShadow"
    },
    /* @__PURE__ */ react.createElement(
      AccordionToggle/* AccordionToggle */.B,
      {
        title: name,
        togglePosition: "left",
        action: canDelete ? /* @__PURE__ */ react.createElement(
          IconButton/* IconButton */.h,
          {
            background: "transparent",
            noBorder: true,
            onClick: () => dispatch(deleteStage(id)),
            label: formatMessage({
              id: "Settings.review-workflows.stage.delete",
              defaultMessage: "Delete stage"
            }),
            icon: /* @__PURE__ */ react.createElement(Trash/* default */.Z, null)
          }
        ) : null
      }
    ),
    /* @__PURE__ */ react.createElement(AccordionContent/* AccordionContent */.v, { padding: 6, background: "neutral0", hasRadius: true }, /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 4 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6 }, /* @__PURE__ */ react.createElement(
      TextInput/* TextInput */.o,
      {
        ...field,
        id: fieldIdentifier,
        value: name,
        label: formatMessage({
          id: "Settings.review-workflows.stage.name.label",
          defaultMessage: "Stage name"
        }),
        error: meta.error ?? false,
        onChange: (event) => {
          field.onChange(event);
          dispatch(updateStage(id, { name: event.target.value }));
        }
      }
    ))))
  );
}

Stage.propTypes = prop_types_default().shape({
  id: (prop_types_default()).number.isRequired,
  name: (prop_types_default()).string.isRequired,
  canDelete: (prop_types_default()).bool.isRequired
}).isRequired;

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stage/index.js


;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/Stages.js










const StagesContainer = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  position: relative;
`;
const Background = (0,styled_components_browser_esm/* default */.ZP)(Box/* Box */.x)`
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
`;
function Stages({ stages }) {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  return /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 6, width: "100%" }, /* @__PURE__ */ react.createElement(StagesContainer, { spacing: 4, width: "100%" }, /* @__PURE__ */ react.createElement(Background, { background: "neutral200", height: "100%", width: 2, zIndex: 1 }), /* @__PURE__ */ react.createElement(
    Flex/* Flex */.k,
    {
      direction: "column",
      alignItems: "stretch",
      gap: 6,
      zIndex: 2,
      position: "relative",
      as: "ol"
    },
    stages.map((stage, index) => {
      const id = stage?.id ?? stage.__temp_key__;
      return /* @__PURE__ */ react.createElement(Box/* Box */.x, { key: `stage-${id}`, as: "li" }, /* @__PURE__ */ react.createElement(
        Stage,
        {
          ...stage,
          id,
          index,
          canDelete: stages.length > 1,
          isOpen: !stage.id
        }
      ));
    })
  )), /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", gap: 6 }, /* @__PURE__ */ react.createElement(
    AddStage,
    {
      type: "button",
      onClick: () => {
        dispatch(addStage({ name: "" }));
        trackUsage("willCreateStage");
      }
    },
    formatMessage({
      id: "Settings.review-workflows.stage.add",
      defaultMessage: "Add new stage"
    })
  )));
}

Stages.defaultProps = {
  stages: []
};
Stages.propTypes = {
  stages: prop_types_default().arrayOf(
    prop_types_default().shape({
      id: (prop_types_default()).number,
      __temp_key__: (prop_types_default()).number,
      name: (prop_types_default()).string.isRequired
    })
  )
};

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/components/Stages/index.js


// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/reducer/index.js



const initialState = {
  status: "loading",
  serverState: {
    currentWorkflow: null,
    workflows: []
  },
  clientState: {
    currentWorkflow: { data: null, isDirty: false, hasDeletedServerStages: false }
  }
};
function reducer(state = initialState, action) {
  return (0,immer_esm/* produce */.Uy)(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case ACTION_SET_WORKFLOWS: {
        const { status, workflows } = payload;
        draft.status = status;
        if (workflows) {
          const defaultWorkflow = workflows[0];
          draft.serverState.workflows = workflows;
          draft.serverState.currentWorkflow = defaultWorkflow;
          draft.clientState.currentWorkflow.data = defaultWorkflow;
          draft.clientState.currentWorkflow.hasDeletedServerStages = false;
        }
        break;
      }
      case ACTION_DELETE_STAGE: {
        const { stageId } = payload;
        const { currentWorkflow } = state.clientState;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.filter(
          (stage) => (stage?.id ?? stage.__temp_key__) !== stageId
        );
        if (!currentWorkflow.hasDeletedServerStages) {
          draft.clientState.currentWorkflow.hasDeletedServerStages = !!state.serverState.currentWorkflow.stages.find((stage) => stage.id === stageId);
        }
        break;
      }
      case ACTION_ADD_STAGE: {
        const { currentWorkflow } = state.clientState;
        if (!currentWorkflow.data) {
          draft.clientState.currentWorkflow.data = {
            stages: []
          };
        }
        const newTempKey = getMaxTempKey(draft.clientState.currentWorkflow.data.stages);
        draft.clientState.currentWorkflow.data.stages.push({
          ...payload,
          __temp_key__: newTempKey
        });
        break;
      }
      case ACTION_UPDATE_STAGE: {
        const { currentWorkflow } = state.clientState;
        const { stageId, ...modified } = payload;
        draft.clientState.currentWorkflow.data.stages = currentWorkflow.data.stages.map(
          (stage) => (stage.id ?? stage.__temp_key__) === stageId ? {
            ...stage,
            ...modified
          } : stage
        );
        break;
      }
      default:
        break;
    }
    if (state.clientState.currentWorkflow.data) {
      draft.clientState.currentWorkflow.isDirty = !isEqual_default()(
        (0,immer_esm/* current */.Vk)(draft.clientState.currentWorkflow).data,
        draft.serverState.currentWorkflow
      );
    }
  });
}
const getMaxTempKey = (stages = []) => {
  const ids = stages.map((stage) => stage.id ?? stage.__temp_key__);
  return Math.max(...ids, -1) + 1;
};

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/useInjectReducer.js


function useInjectReducer(namespace, reducer) {
  const store = (0,es/* useStore */.oR)();
  (0,react.useEffect)(() => {
    store.injectReducer(namespace, reducer);
  }, [store, namespace, reducer]);
}

;// CONCATENATED MODULE: ./.cache/admin/src/hooks/useInjectReducer/index.js


// EXTERNAL MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/hooks/useReviewWorkflows.js
var useReviewWorkflows = __webpack_require__(53752);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 26 modules
var yup_es = __webpack_require__(87561);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/utils/getWorkflowValidationSchema.js

function getWorkflowValidationSchema({ formatMessage }) {
  return yup_es/* object */.Ry({
    stages: yup_es/* array */.IX().of(
      yup_es/* object */.Ry().shape({
        name: yup_es/* string */.Z_().required(
          formatMessage({
            id: "Settings.review-workflows.validation.stage.name",
            defaultMessage: "Name is required"
          })
        ).max(
          255,
          formatMessage({
            id: "Settings.review-workflows.validation.stage.max-length",
            defaultMessage: "Name can not be longer than 255 characters"
          })
        )
      })
    )
  });
}

// EXTERNAL MODULE: ./.cache/admin/src/permissions/index.js + 1 modules
var permissions = __webpack_require__(87751);
;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/ReviewWorkflows.js
















function ReviewWorkflowsPage() {
  const { trackUsage } = (0,helper_plugin_esm/* useTracking */.rS)();
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const dispatch = (0,es/* useDispatch */.I0)();
  const { put } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  const { formatAPIError } = (0,helper_plugin_esm/* useAPIErrorHandler */.So)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { workflows: workflowsData, refetchWorkflow } = (0,useReviewWorkflows/* useReviewWorkflows */.n)();
  const {
    status,
    clientState: {
      currentWorkflow: {
        data: currentWorkflow,
        isDirty: currentWorkflowIsDirty,
        hasDeletedServerStages: currentWorkflowHasDeletedServerStages
      }
    }
  } = (0,es/* useSelector */.v9)((state) => state?.[REDUX_NAMESPACE] ?? initialState);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = (0,react.useState)(false);
  const { mutateAsync, isLoading } = (0,react_query_es.useMutation)(
    async ({ workflowId, stages }) => {
      try {
        const {
          data: { data }
        } = await put(`/admin/review-workflows/workflows/${workflowId}/stages`, {
          data: stages
        });
        return data;
      } catch (error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      }
      return null;
    },
    {
      onError(error) {
        toggleNotification({
          type: "warning",
          message: formatAPIError(error)
        });
      },
      onSuccess() {
        toggleNotification({
          type: "success",
          message: { id: "notification.success.saved", defaultMessage: "Saved" }
        });
      }
    }
  );
  const updateWorkflowStages = (workflowId, stages) => {
    return mutateAsync({ workflowId, stages });
  };
  const submitForm = async () => {
    await updateWorkflowStages(currentWorkflow.id, currentWorkflow.stages);
    await refetchWorkflow();
    setIsConfirmDeleteDialogOpen(false);
  };
  const handleConfirmDeleteDialog = async () => {
    await submitForm();
  };
  const toggleConfirmDeleteDialog = () => {
    setIsConfirmDeleteDialogOpen((prev) => !prev);
  };
  const formik = (0,formik_esm/* useFormik */.TA)({
    enableReinitialize: true,
    initialValues: currentWorkflow,
    async onSubmit() {
      if (currentWorkflowHasDeletedServerStages) {
        setIsConfirmDeleteDialogOpen(true);
      } else {
        submitForm();
      }
    },
    validationSchema: getWorkflowValidationSchema({ formatMessage }),
    validateOnChange: false
  });
  useInjectReducer(REDUX_NAMESPACE, reducer);
  (0,react.useEffect)(() => {
    dispatch(setWorkflows({ status: workflowsData.status, data: workflowsData.data }));
  }, [workflowsData.status, workflowsData.data, dispatch]);
  (0,react.useEffect)(() => {
    trackUsage("didViewWorkflow");
  }, []);
  return /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: permissions/* default.settings.review-workflows.main */.Z.settings["review-workflows"].main }, /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* SettingsPageTitle */.SL,
    {
      name: formatMessage({
        id: "Settings.review-workflows.page.title",
        defaultMessage: "Review Workflows"
      })
    }
  ), /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(formik_esm/* FormikProvider */.Hy, { value: formik }, /* @__PURE__ */ react.createElement(formik_esm/* Form */.l0, { onSubmit: formik.handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          type: "submit",
          size: "M",
          disabled: !currentWorkflowIsDirty,
          loading: !isConfirmDeleteDialogOpen && isLoading
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      title: formatMessage({
        id: "Settings.review-workflows.page.title",
        defaultMessage: "Review Workflows"
      }),
      subtitle: formatMessage(
        {
          id: "Settings.review-workflows.page.subtitle",
          defaultMessage: "{count, plural, one {# stage} other {# stages}}"
        },
        { count: currentWorkflow?.stages?.length ?? 0 }
      )
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, status === "loading" && /* @__PURE__ */ react.createElement(Loader/* Loader */.a, null, formatMessage({
    id: "Settings.review-workflows.page.isLoading",
    defaultMessage: "Workflow is loading"
  })), /* @__PURE__ */ react.createElement(Stages, { stages: formik.values?.stages })))), /* @__PURE__ */ react.createElement(
    helper_plugin_esm/* ConfirmDialog */.QH,
    {
      bodyText: {
        id: "Settings.review-workflows.page.delete.confirm.body",
        defaultMessage: "All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?"
      },
      isConfirmButtonLoading: isLoading,
      isOpen: isConfirmDeleteDialogOpen,
      onToggleDialog: toggleConfirmDeleteDialog,
      onConfirm: handleConfirmDeleteDialog
    }
  ))));
}

;// CONCATENATED MODULE: ./.cache/ee/admin/pages/SettingsPage/pages/ReviewWorkflows/index.js

/* harmony default export */ const ReviewWorkflows = (ReviewWorkflowsPage);


/***/ }),

/***/ 48734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ F),
/* harmony export */   "y": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71997);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13819);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41580);
/* harmony import */ var _Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11047);
/* harmony import */ var _hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2504);
/* harmony import */ var _Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75515);








const v = ({
  theme: r,
  expanded: o,
  variant: t,
  disabled: i,
  error: a
}) => a ? `1px solid ${r.colors.danger600} !important` : i ? `1px solid ${r.colors.neutral150}` : o ? `1px solid ${r.colors.primary600}` : t === "primary" ? `1px solid ${r.colors.neutral0}` : `1px solid ${r.colors.neutral100}`, j = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z)``, k = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x)`
  border: ${v};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({
  theme: r
}) => r.colors.primary600};

    ${j} {
      color: ${({
  theme: r,
  expanded: o
}) => o ? void 0 : r.colors.primary700};
    }

    ${_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z} {
      color: ${({
  theme: r,
  expanded: o
}) => o ? void 0 : r.colors.primary600};
    }

    & > ${_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_5__/* .Flex */ .k} {
      background: ${({
  theme: r
}) => r.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({
  theme: r
}) => r.colors.primary200};
    }
  }
`, F = ({
  children: r,
  disabled: o = !1,
  error: t,
  expanded: i = !1,
  hasErrorMessage: a = !0,
  id: f,
  onToggle: s,
  toggle: c,
  size: e = "M",
  variant: d = "primary",
  shadow: $
}) => {
  const l = (0,_hooks_useId_js__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .M)(f), x = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    expanded: i,
    onToggle: s,
    toggle: c,
    id: l,
    size: e,
    variant: d,
    disabled: o
  }), [o, i, l, s, e, c, d]);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_AccordionContext_js__WEBPACK_IMPORTED_MODULE_7__/* .AccordionContext.Provider */ .S.Provider, {
    value: x,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(k, {
      "data-strapi-expanded": i,
      disabled: o,
      "aria-disabled": o,
      expanded: i,
      hasRadius: !0,
      variant: d,
      error: t,
      shadow: $,
      children: r
    }), t && a && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .x, {
      paddingTop: 1,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Typography_Typography_js__WEBPACK_IMPORTED_MODULE_3__/* .Typography */ .Z, {
        variant: "pi",
        textColor: "danger600",
        children: t
      })
    })]
  });
};



/***/ }),

/***/ 63081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13819);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const p = ({
  children: r,
  ...n
}) => {
  const {
    expanded: i,
    id: o
  } = (0,_AccordionContext_js__WEBPACK_IMPORTED_MODULE_1__/* .useAccordion */ .A)();
  if (!i)
    return null;
  const c = `accordion-content-${o}`, e = `accordion-label-${o}`, t = `accordion-desc-${o}`;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x, {
    role: "region",
    id: c,
    "aria-labelledby": e,
    "aria-describedby": t,
    ...n,
    children: r
  });
};



/***/ }),

/***/ 13819:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ r),
/* harmony export */   "S": () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);

const t = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  disabled: !1,
  expanded: !1,
  id: "",
  size: "M",
  variant: "primary"
}), r = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(t);



/***/ }),

/***/ 74756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ Q)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/CarretDown.js
var CarretDown = __webpack_require__(12645);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(71997);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/Accordion.js
var Accordion = __webpack_require__(48734);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionContext.js
var AccordionContext = __webpack_require__(13819);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/utils.js
const utils_n = ({ expanded: e, disabled: t, variant: a }) => {
  let r = "neutral100";
  return e ? r = "primary100" : t ? r = "neutral150" : a === "primary" && (r = "neutral0"), r;
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Icon/Icon.js
var Icon = __webpack_require__(52624);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/TextButton/TextButton.js
var TextButton = __webpack_require__(39785);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Accordion/AccordionToggle.js










const L = (0,styled_components_browser_esm/* default */.ZP)(TextButton/* TextButton */.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14 / 16}rem;
    height: ${14 / 16}rem;

    path {
      fill: ${({
  theme: o,
  expanded: e
}) => e ? o.colors.primary600 : o.colors.neutral500};
    }
  }
`, P = (0,styled_components_browser_esm/* default */.ZP)(Flex/* Flex */.k)`
  min-height: ${({
  theme: o,
  size: e
}) => o.sizes.accordions[e]};
  border-radius: ${({
  theme: o,
  expanded: e
}) => e ? `${o.borderRadius} ${o.borderRadius} 0 0` : o.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({
  theme: o
}) => o.colors.primary600};
      }
    }
  }
`, Q = ({
  title: o,
  description: e,
  as: $ = "span",
  togglePosition: l = "right",
  action: g,
  ...w
}) => {
  const {
    onToggle: s,
    toggle: m,
    expanded: r,
    id: c,
    size: t,
    variant: C,
    disabled: n
  } = (0,AccordionContext/* useAccordion */.A)(), T = `accordion-content-${c}`, h = `accordion-label-${c}`, k = `accordion-desc-${c}`, a = t === "M" ? 6 : 4, u = t === "M" ? a : a - 2, v = utils_n({
    expanded: r,
    disabled: n,
    variant: C
  }), j = {
    as: $,
    fontWeight: t === "S" ? "bold" : void 0,
    id: h,
    textColor: r ? "primary600" : "neutral700",
    ellipsis: !0,
    variant: t === "M" ? "delta" : void 0
  }, z = r ? "primary600" : "neutral600", B = r ? "primary200" : "neutral200", f = t === "M" ? `${32 / 16}rem` : `${24 / 16}rem`, x = () => {
    n || (m && !s ? (console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'), m()) : s && s());
  }, b = (0,jsx_runtime.jsx)(Flex/* Flex */.k, {
    justifyContent: "center",
    borderRadius: "50%",
    height: f,
    width: f,
    transform: r ? "rotate(180deg)" : void 0,
    "data-strapi-dropdown": !0,
    "aria-hidden": !0,
    as: "span",
    background: B,
    cursor: n ? "not-allowed" : "pointer",
    onClick: x,
    shrink: 0,
    children: (0,jsx_runtime.jsx)(Icon/* Icon */.J, {
      as: CarretDown/* default */.Z,
      width: t === "M" ? `${11 / 16}rem` : `${8 / 16}rem`,
      color: r ? "primary600" : "neutral600"
    })
  });
  return (0,jsx_runtime.jsx)(P, {
    paddingBottom: u,
    paddingLeft: a,
    paddingRight: a,
    paddingTop: u,
    background: v,
    expanded: r,
    size: t,
    justifyContent: "space-between",
    cursor: n ? "not-allowed" : "",
    children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, {
      gap: 3,
      flex: 1,
      maxWidth: "100%",
      children: [l === "left" && b, (0,jsx_runtime.jsx)(L, {
        onClick: x,
        "aria-disabled": n,
        "aria-expanded": r,
        "aria-controls": T,
        "aria-labelledby": h,
        "data-strapi-accordion-toggle": !0,
        expanded: r,
        type: "button",
        flex: 1,
        minWidth: 0,
        ...w,
        children: (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
          children: [(0,jsx_runtime.jsx)(Accordion/* AccordionTypography */.y, {
            ...j,
            children: o
          }), e && (0,jsx_runtime.jsx)(Typography/* Typography */.Z, {
            as: "p",
            id: k,
            textColor: z,
            children: e
          })]
        })
      }), l === "right" && (0,jsx_runtime.jsxs)(Flex/* Flex */.k, {
        gap: 3,
        children: [b, g]
      }), l === "left" && g]
    })
  });
};



/***/ }),

/***/ 99782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);

const h = (l) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  width: "1rem",
  height: "1rem",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...l,
  children: [/* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "#212134"
  }), /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z",
    fill: "#F6F6F9"
  })]
}), r = h;



/***/ })

}]);