'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.create = exports.compose = exports.applyWidth = void 0;

//******* FILE IS COPIED FROM ../builder/src/utilities/StyleSheet.js ******
//************************* DO NOT EDIT BY HAND ************************
const create = styles => styles; // Like StyleSheet.compose, but concatenates shared keys' values into arrays.

exports.create = create;

const compose = (style1, style2) => {
  const res = { ...style1 };

  if (!style1) {
    return style2;
  }

  if (!style2) {
    return style1;
  }

  for (const [k, v] of Object.entries(style2)) {
    let resV = res[k];

    if (resV === undefined) {
      res[k] = v;
    } else if (Array.isArray(resV) && Array.isArray(v)) {
      res[k] = resV.concat(v);
    } else if (Array.isArray(resV)) {
      res[k] = resV.concat([v]);
    } else if (Array.isArray(v)) {
      res[k] = [resV].concat(v);
    } else {
      res[k] = [resV, v];
    }
  }

  return res;
};

exports.compose = compose;

const isValidStyleValue = value =>
  value !== '' && ['string', 'number'].includes(typeof value); // Given a window width, convert a the style to a StyleSheet style, using values from
// the highest and most recent minWidth for each style key, which fits within the minWidth.
//
// Also filters to output specific style keys based on the 'styleKeys' argument. Returns all if undefined

const applyWidth = (style, width, styleKeys) => {
  const res = {};

  if (!style) {
    return {};
  }

  for (const [k, v] of Object.entries(style)) {
    if (Array.isArray(styleKeys) && !styleKeys.includes(k)) {
      continue;
    }

    let resV; // If there is an array of values, choose the last one with the largest minWidth
    // which fits in the current screen width

    if (Array.isArray(v)) {
      let maxMinWidth = 0;
      v.filter(innerV => innerV !== undefined).forEach(innerV => {
        const minWidth = innerV.minWidth ?? 0;
        const value = innerV.value ?? innerV;

        if (
          isValidStyleValue(value) &&
          minWidth <= width &&
          minWidth >= maxMinWidth
        ) {
          resV = value;
          maxMinWidth = minWidth;
        }
      }); // Otherwise, check if the value fits in the current screen width
    } else if (v !== undefined) {
      const minWidth = v.minWidth ?? 0;
      const value = v.value ?? v;

      if (isValidStyleValue(value) && minWidth <= width) {
        resV = value;
      }
    }

    if (resV !== undefined) {
      res[k] = resV;
    }
  }

  return res;
};

exports.applyWidth = applyWidth;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGUiLCJzdHlsZXMiLCJjb21wb3NlIiwic3R5bGUxIiwic3R5bGUyIiwicmVzIiwiayIsInYiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVzViIsInVuZGVmaW5lZCIsIkFycmF5IiwiaXNBcnJheSIsImNvbmNhdCIsImlzVmFsaWRTdHlsZVZhbHVlIiwidmFsdWUiLCJpbmNsdWRlcyIsImFwcGx5V2lkdGgiLCJzdHlsZSIsIndpZHRoIiwic3R5bGVLZXlzIiwibWF4TWluV2lkdGgiLCJmaWx0ZXIiLCJpbm5lclYiLCJmb3JFYWNoIiwibWluV2lkdGgiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvU3R5bGVTaGVldC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyoqKioqKiogRklMRSBJUyBDT1BJRUQgRlJPTSAuLi9idWlsZGVyL3NyYy91dGlsaXRpZXMvU3R5bGVTaGVldC5qcyAqKioqKipcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKiBETyBOT1QgRURJVCBCWSBIQU5EICoqKioqKioqKioqKioqKioqKioqKioqKlxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9IHN0eWxlcyA9PiBzdHlsZXM7XG5cbi8vIExpa2UgU3R5bGVTaGVldC5jb21wb3NlLCBidXQgY29uY2F0ZW5hdGVzIHNoYXJlZCBrZXlzJyB2YWx1ZXMgaW50byBhcnJheXMuXG5leHBvcnQgY29uc3QgY29tcG9zZSA9IChzdHlsZTEsIHN0eWxlMikgPT4ge1xuICBjb25zdCByZXMgPSB7IC4uLnN0eWxlMSB9O1xuICBpZiAoIXN0eWxlMSkge1xuICAgIHJldHVybiBzdHlsZTI7XG4gIH1cbiAgaWYgKCFzdHlsZTIpIHtcbiAgICByZXR1cm4gc3R5bGUxO1xuICB9XG4gIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKHN0eWxlMikpIHtcbiAgICBsZXQgcmVzViA9IHJlc1trXTtcbiAgICBpZiAocmVzViA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNba10gPSB2O1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXNWKSAmJiBBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICByZXNba10gPSByZXNWLmNvbmNhdCh2KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzVikpIHtcbiAgICAgIHJlc1trXSA9IHJlc1YuY29uY2F0KFt2XSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICByZXNba10gPSBbcmVzVl0uY29uY2F0KHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNba10gPSBbcmVzViwgdl07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59O1xuXG5jb25zdCBpc1ZhbGlkU3R5bGVWYWx1ZSA9IHZhbHVlID0+XG4gIHZhbHVlICE9PSBcIlwiICYmIFtcInN0cmluZ1wiLCBcIm51bWJlclwiXS5pbmNsdWRlcyh0eXBlb2YgdmFsdWUpO1xuXG4vLyBHaXZlbiBhIHdpbmRvdyB3aWR0aCwgY29udmVydCBhIHRoZSBzdHlsZSB0byBhIFN0eWxlU2hlZXQgc3R5bGUsIHVzaW5nIHZhbHVlcyBmcm9tXG4vLyB0aGUgaGlnaGVzdCBhbmQgbW9zdCByZWNlbnQgbWluV2lkdGggZm9yIGVhY2ggc3R5bGUga2V5LCB3aGljaCBmaXRzIHdpdGhpbiB0aGUgbWluV2lkdGguXG4vL1xuLy8gQWxzbyBmaWx0ZXJzIHRvIG91dHB1dCBzcGVjaWZpYyBzdHlsZSBrZXlzIGJhc2VkIG9uIHRoZSAnc3R5bGVLZXlzJyBhcmd1bWVudC4gUmV0dXJucyBhbGwgaWYgdW5kZWZpbmVkXG5leHBvcnQgY29uc3QgYXBwbHlXaWR0aCA9IChzdHlsZSwgd2lkdGgsIHN0eWxlS2V5cykgPT4ge1xuICBjb25zdCByZXMgPSB7fTtcbiAgaWYgKCFzdHlsZSkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhzdHlsZSkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZUtleXMpICYmICFzdHlsZUtleXMuaW5jbHVkZXMoaykpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCByZXNWO1xuICAgIC8vIElmIHRoZXJlIGlzIGFuIGFycmF5IG9mIHZhbHVlcywgY2hvb3NlIHRoZSBsYXN0IG9uZSB3aXRoIHRoZSBsYXJnZXN0IG1pbldpZHRoXG4gICAgLy8gd2hpY2ggZml0cyBpbiB0aGUgY3VycmVudCBzY3JlZW4gd2lkdGhcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgbGV0IG1heE1pbldpZHRoID0gMDtcbiAgICAgIHYuZmlsdGVyKGlubmVyViA9PiBpbm5lclYgIT09IHVuZGVmaW5lZCkuZm9yRWFjaChpbm5lclYgPT4ge1xuICAgICAgICBjb25zdCBtaW5XaWR0aCA9IGlubmVyVi5taW5XaWR0aCA/PyAwO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGlubmVyVi52YWx1ZSA/PyBpbm5lclY7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc1ZhbGlkU3R5bGVWYWx1ZSh2YWx1ZSkgJiZcbiAgICAgICAgICBtaW5XaWR0aCA8PSB3aWR0aCAmJlxuICAgICAgICAgIG1pbldpZHRoID49IG1heE1pbldpZHRoXG4gICAgICAgICkge1xuICAgICAgICAgIHJlc1YgPSB2YWx1ZTtcbiAgICAgICAgICBtYXhNaW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgaWYgdGhlIHZhbHVlIGZpdHMgaW4gdGhlIGN1cnJlbnQgc2NyZWVuIHdpZHRoXG4gICAgfSBlbHNlIGlmICh2ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IG1pbldpZHRoID0gdi5taW5XaWR0aCA/PyAwO1xuICAgICAgY29uc3QgdmFsdWUgPSB2LnZhbHVlID8/IHY7XG4gICAgICBpZiAoaXNWYWxpZFN0eWxlVmFsdWUodmFsdWUpICYmIG1pbldpZHRoIDw9IHdpZHRoKSB7XG4gICAgICAgIHJlc1YgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJlc1YgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzW2tdID0gcmVzVjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlcztcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ08sTUFBTUEsTUFBTSxHQUFHQyxNQUFNLElBQUlBLE1BQXpCLEMsQ0FFUDs7Ozs7QUFDTyxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULEtBQW9CO0VBQ3pDLE1BQU1DLEdBQUcsR0FBRyxFQUFFLEdBQUdGO0VBQUwsQ0FBWjs7RUFDQSxJQUFJLENBQUNBLE1BQUwsRUFBYTtJQUNYLE9BQU9DLE1BQVA7RUFDRDs7RUFDRCxJQUFJLENBQUNBLE1BQUwsRUFBYTtJQUNYLE9BQU9ELE1BQVA7RUFDRDs7RUFDRCxLQUFLLE1BQU0sQ0FBQ0csQ0FBRCxFQUFJQyxDQUFKLENBQVgsSUFBcUJDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTCxNQUFmLENBQXJCLEVBQTZDO0lBQzNDLElBQUlNLElBQUksR0FBR0wsR0FBRyxDQUFDQyxDQUFELENBQWQ7O0lBQ0EsSUFBSUksSUFBSSxLQUFLQyxTQUFiLEVBQXdCO01BQ3RCTixHQUFHLENBQUNDLENBQUQsQ0FBSCxHQUFTQyxDQUFUO0lBQ0QsQ0FGRCxNQUVPLElBQUlLLEtBQUssQ0FBQ0MsT0FBTixDQUFjSCxJQUFkLEtBQXVCRSxLQUFLLENBQUNDLE9BQU4sQ0FBY04sQ0FBZCxDQUEzQixFQUE2QztNQUNsREYsR0FBRyxDQUFDQyxDQUFELENBQUgsR0FBU0ksSUFBSSxDQUFDSSxNQUFMLENBQVlQLENBQVosQ0FBVDtJQUNELENBRk0sTUFFQSxJQUFJSyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsSUFBZCxDQUFKLEVBQXlCO01BQzlCTCxHQUFHLENBQUNDLENBQUQsQ0FBSCxHQUFTSSxJQUFJLENBQUNJLE1BQUwsQ0FBWSxDQUFDUCxDQUFELENBQVosQ0FBVDtJQUNELENBRk0sTUFF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
