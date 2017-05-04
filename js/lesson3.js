/**
 * Created by Michael on 25.04.2017.
 */

$(document).ready(function() {
  $(".btn-info").click(function() {
    if ($(".name").val().length === 0) {
      return;
    }

    if (!$("ul").is(".list-group")) {
      $(".container").append(
        $("<ul/>", { class: "list-group", text: "List:" }).css({"font-size": "22px"})
      );
    }

    if ($("ul").is(".list-group")) {
      $(".list-group").append(
        $("<li/>", { class: "list-group-item" }).css("font-size", "16px").text(
          " " + $(".name").val()).append(
            $("<span/>", { class: "badge" }).text($(".count").val()))
          .prepend($("<input/>", { type: "checkbox", class: "bought" })
        )
      );
    }

    if ($("input").is(".bought")) {
      $(".bought").click(function() {
        ($(this).prop("checked")) ? $(this).closest(".list-group-item").css("text-decoration", "line-through") :
          $(this).closest(".list-group-item").css("text-decoration", "none");
      });
    }
  });
});