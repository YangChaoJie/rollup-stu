var e = (a, o) => () => (o || a((o = { exports: {} }).exports, o), o.exports);
/* empty css            */var t = e(() => {
  let l = "b";
  console.log("a-------", l);
  l = l + "1";
});
export default t();
