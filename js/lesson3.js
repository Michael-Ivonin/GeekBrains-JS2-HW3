/**
 * Created by Michael on 25.04.2017.
 */

$(".btn-info").click(function() {
  if ($(".name").val().length === 0) {
    return;
  }

  if (!$("ul").is(".list")) {
    $("body").append(
      $("<ul/>", { class: "list", text: "List:" })
    );
  }

  if ($("ul").is(".list")) {
    $(".list").append(
      $("<li/>", { class: "item" }).text(
        " " + $(".name").val() + " " + $(".count").val() + ";").prepend(
          $("<input/>", { type: "checkbox", class: "bought" })
      )
    );
  }

  if ($("input").is(".bought")) {
    $(".bought").click(function() {
      ($(this).prop("checked")) ? $(this).closest(".item").css("text-decoration", "line-through") :
        $(this).closest(".item").css("text-decoration", "none");
    });
  }
});