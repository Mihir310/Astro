async function test() {
  const payload = {
    year: 2026, month: 5, date: 3, hours: 10, minutes: 0, seconds: 0,
    latitude: 22, longitude: 77, timezone: 5.5
  };
  const res = await fetch("https://json.freeastrologyapi.com/complete-panchang", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  console.log(await res.text());
}
test();
