
export function CheckBox() {
  return (
      <span
        data-is-focusable="true"
        className="checkBox relative cursor-pointer"
        aria-label="Marcar como completada hfgh"
        role="checkbox"
        aria-checked="false"
        tabIndex="-1"
        title="Guardar tarea"
      >
        <svg
          className={`fluentIcon ___12fm75w f1w7gpdv fez10in fg4l7m0 absolute top-0 left-0 translate-x-[-50%] translate-y-[40%]`}
          fill="currentColor"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            d="M10 3a7 7 0 100 14 7 7 0 000-14zm-8 7a8 8 0 1116 0 8 8 0 01-16 0z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          className={`fluentIcon checkBox-hover ___12fm75w f1w7gpdv fez10in fg4l7m0 absolute
        top-0 left-0 translate-x-[-50%] translate-y-[40%] opacity-0 hover:opacity-100 transition-opacity duration-200`}
          fill="currentColor"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path
            d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm3.36 4.65c.17.17.2.44.06.63l-.06.07-4 4a.5.5 0 01-.64.07l-.07-.06-2-2a.5.5 0 01.63-.77l.07.06L9 11.3l3.65-3.65c.2-.2.51-.2.7 0z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
  );
}
